fetch("api/research.json")
  .then((reply) => reply.json())
  .then((data) => {
    processData(data);
  });

function processData(data) {
  var root = data;

  console.log(root);
  document.querySelector("main").innerText = ` Name: ${root.name} `;
}
