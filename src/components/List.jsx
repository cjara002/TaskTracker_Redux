import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SingleTask from "./SingleTask";
import Swal from "sweetalert2";
import { Table } from "reactstrap";
import TaskForm from "./TaskForm";
// import taskReducer from "../Redux/Reducer/userReducer";
// import { connect } from "formik";
// import { connect } from "react-redux";
// import showResults from "./showResults";

class List extends React.Component {
  state = {
    form: {
      task: "hello",
      priority: "medium",
    },
    isEditing: false,
    items: [],
    modal: false,
    noItems: false,
  };

  componentDidMount() {
    const existingTasks = JSON.parse(localStorage.getItem("myTasks"));
    if (existingTasks) {
      this.storageList();
    } else {
      this.showMessage();
    }
  }

  storageList = () => {
    const tasksList = JSON.parse(localStorage.getItem("myTasks"));
    this.setState(() => ({
      items: tasksList,
    }));
  };

  showMessage = () => {
    this.setState(() => ({
      noItems: true,
    }));
  };

  editTask = (item) => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      isEditing: !prevState.isEditing,
      form: {
        task: item.task,
        priority: item.priority,
      },
    }));
  };

  deleteTaskUserConfirmation = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#042A38",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.deleteSingleTask(item);
      }
    });
  };

  deleteSingleTask = (item) => {
    const allTask = [];
    const existingTask = JSON.parse(localStorage.getItem("myTasks"));
    for (let i = 0; i < existingTask.length; i++) {
      let singleTask = existingTask[i];
      if (singleTask.task === item.task) {
        existingTask.splice(i, 1);
      }
    }
    existingTask.forEach((task) => {
      allTask.push(task);
    });
    localStorage.setItem("myTasks", JSON.stringify(allTask));
    var updatedTaskList = JSON.parse(localStorage.getItem("myTasks"));
    if (!updatedTaskList.includes(item)) {
      Swal.fire("Deleted!");
    }
  };

  fillList = (aList, i) => (
    <SingleTask
      list={aList}
      key={i}
      triggerEdit={this.editTask}
      triggerDelete={this.deleteTaskUserConfirmation}
    />
  );

  toggle = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      modal: !prevState.modal,
    }));
  };

  toggleAddQuestion = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.noItems ? (
          <div style={{ margin: "20%" }}>
            <h1>Let's get the day started!</h1>
            <p>Please add a new task.</p>
            <button
              onClick={this.toggleAddQuestion}
              className="btn btn-dark btn-block"
            >
              Add Task{" "}
            </button>
          </div>
        ) : (
          <Table hover>
            <thead>
              <tr id="taskHeadColor">
                {/* <th>#</th> */}
                <th>Task</th>
                <th>Priority</th>
                <th></th>
                <th></th>
                <th>
                  <em
                    className="fa-1x mr-2 fas fa-plus"
                    onClick={this.toggleAddQuestion}
                    style={{ float: "center", cursor: "pointer" }}
                    data-toggle="tooltip"
                    title="Add Task"
                  ></em>
                </th>
              </tr>
            </thead>
            {this.props.item.length > 0 && this.props.item.map(this.fillList)}
          </Table>
        )}
        <TaskForm
          // loadTask={this.storageList}
          isModal={this.state.modal}
          toggle={this.toggle}
          toggleAddQuestion={this.toggleAddQuestion}
          // form={this.state.form}
          // isEditing={this.state.isEditing}
          // populateTask={this.storageList}
          // onSubmit={showResults}
        />
      </React.Fragment>
    );
  }
}

export default List;

// const mapStateToProps = ({ todoReducer }) => ({
//   items: taskReducer.tasks
// })

// export default connect(mapStateToProps, {})(List);