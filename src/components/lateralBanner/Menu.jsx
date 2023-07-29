import { useState, useRef } from "react"

import { IoIosSettings, IoIosLogOut } from "react-icons/io"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { logoutSession } from "../../domain/home/homeLogic"
import { Direction } from "../../domain/router/routers"
import { Navigate, useNavigate } from "react-router-dom"

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

const options = ["Profile", "Settings", "Log out"]

export const MenuOptions = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    const exitOnClick = (e) => {
        window.history.replaceState('','','/login')
        // window.location.pathname = Direction.LOGIN
        navigate("/login")
        setOpenDialog(false)
    }

    return (
        <>
            <BiDotsVerticalRounded
                size={22}
                className="settings-dots icons-banner"
                onClick={(e) => {
                    setAnchorEl(e.currentTarget)
                }}
            />
            <MenuOption
                options={options}
                anchorEl={anchorEl}
                open={open}
                handleClose={(e) => {
                    setAnchorEl(null)
                }}
                handleOnClickItem={() => {
                    setOpenDialog(true)
                }}
            />
            <ConfirmDialog
                isOpen={openDialog}
                exitOnClick={exitOnClick}
                cancelOnClick={(e) => {
                    setOpenDialog(false)
                }}
            />
        </>
    )
}

const MenuOption = ({
    options,
    anchorEl,
    open,
    handleClose,
    handleOnClickItem,
}) => {
    return (
        <Menu
            id="asic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
        >
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <CgProfile />
                </ListItemIcon>
                <ListItemText>{options[0]}</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <IoIosSettings />
                </ListItemIcon>
                <ListItemText>{options[1]}</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleOnClickItem}>
                <ListItemIcon color="#000000">
                    <IoIosLogOut/>
                </ListItemIcon>
                <ListItemText>{options[2]}</ListItemText>
            </MenuItem>
        </Menu>
    )
}
const ConfirmDialog = ({ isOpen, exitOnClick, cancelOnClick }) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={cancelOnClick}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={cancelOnClick}>
                        Disagree
                    </Button>
                    <Button onClick={exitOnClick} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
