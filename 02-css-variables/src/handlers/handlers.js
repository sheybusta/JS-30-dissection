function handleUpdate() {
  //   console.log(this.dataset);

  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

export { handleUpdate };
