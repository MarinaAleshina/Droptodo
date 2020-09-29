export function drag() {
  const tasksItem = document.querySelectorAll(".task-item");

  const dropContainer = document.querySelectorAll(".task-container");

  tasksItem.forEach((el, index) => {
    el.addEventListener("dragstart", function(ev) {
      ev.dataTransfer.setData("text", index);
      ev.dataTransfer.setDragImage(this, 0, 0);

      this.classList.add("js-hold");

      setTimeout(() => this.classList.replace("js-hold", "js-invisible"), 0);
    });

    el.addEventListener("dragend", function() {
      this.classList.remove("js-invisible");
    });
  }, false);

  dropContainer.forEach(el => {
    el.addEventListener(
      "dragover",
      function(ev) {
        ev.dataTransfer.dropEffect = "move";
        if (ev.preventDefault) ev.preventDefault();
        return false;
      },
      false
    );

    el.addEventListener(
      "dragenter",
      function(ev) {
        this.classList.toggle("js-hovered");
        ev.preventDefault();
      },
      false
    );

    el.addEventListener(
      "dragleave",
      function() {
        this.classList.remove("js-hovered");
      },
      false
    );

    el.addEventListener(
      "drop",
      function(ev) {
        this.classList.remove("js-hovered");

        if (ev.preventDefault) ev.preventDefault();
        if (ev.stopPropagation) ev.stopPropagation();

        el.append(tasksItem[ev.dataTransfer.getData("text")]);

        return false;
      },
      false
    );
  }, false);
}
