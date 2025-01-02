function customReact(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        // props[0=href,1=target]
        if(prop==='children')continue ;
        {
            domElement.setAttribute(prop ,reactElement.props[prop]);

        }
    }

    container.appendChild(domElement);

}
const reactElement ={
    type:'a',
    props :{
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to Visit Google'
}

const mainConatiner = document.getElementById('root')

customReact(reactElement, mainConatiner);