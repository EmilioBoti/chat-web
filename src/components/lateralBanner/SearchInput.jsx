export const SearchInput = ( {onInputChange}) => {
    return (
        <div className="input-container">
            <input
                type="text"
                className="input-login"
                placeholder="look for a friend or new ones..."
                onChange={ (e) => {
                    onInputChange(e.target.value)
                }}
            />
        </div>
    )
}
