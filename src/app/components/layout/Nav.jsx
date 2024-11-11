function Nav(props) {
console.log(props);

 //map() 문법
 //const array=[1,2,3]
 //array.map(() => ())
 
 
 
 return <nav>
		
		<ul>
			{props.nav.map((item, index)=>(<li key={index}>home</li>))}
			<li>home</li>
			<li>about</li>
			<li>login</li>
			</ul>
			</nav>;
}

export default Nav;