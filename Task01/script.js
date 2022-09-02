const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

const addItem = () => {
  const itemList = {
    id : `${Date.now()}`,
    list__Item : document.getElementById("item__input").value
  };

  const outputList =
  `
  <div class="p-3" id=${itemList.id}>
      <div class="mb-3 d-flex gap-3">
        <h5>${itemList.list__Item}</h5>
        <button type="button" class="btn btn-danger shadow"><i class="fas fa-trash-alt"></i></button>
      </div>
  </div>
  `

  taskContainer.insertAdjacentHTML("beforeend", outputList);
};
