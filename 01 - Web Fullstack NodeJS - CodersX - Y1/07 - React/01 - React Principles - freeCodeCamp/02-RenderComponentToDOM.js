ReactDOM.render(componentToRender, targetNode);
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  let node = document.getElementById('challenge-node');
  ReactDOM.render(JSX, node);