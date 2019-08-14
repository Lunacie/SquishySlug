
function Project() {

  this._projects = projects_tab;
  this._project = {};
  this._id = 0;
  this._path = "/assets/projects/";

  this.update = function() {
    this._project = this._projects.getProject();
    $(".project-name").html(this._project.title);
    $(".project-image").attr("src", this._path + this._project.image);
    $(".project-description.en").html(this._project.description);
    $(".project-description.fr").html(this._project.descriptionFR);
    $(".project-year").html(this._project.year);
  }
}

let project_tab = new Project();
