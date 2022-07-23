import "./Search.css"

const Search = (props) => {
	
		return (
			<form onSubmit={props.onSubmit} id="search" className="Search">
				<input onChange={props.onChange} value={props.title} type="search" placeholder="Search for a title..." />
			</form>
		);
	}

export default Search
