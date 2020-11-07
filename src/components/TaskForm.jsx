import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import React from "react";
import {
  reduxForm,
  // initialize
} from "redux-form";
import validation from "./TaskFormSchema";

class TaskForm extends React.Component {
  render() {
    const {
      fields: { task, description, priority },
      submitting,
      // item, itemFetching, error handleSubmit
    } = this.props;
    return (
      <React.Fragment>
        <Modal isOpen={this.props.isModal}>
          <ModalHeader
            toggle={
              this.props.isEditing
                ? this.props.toggle
                : this.props.toggleAddQuestion
            }
            className
          >
            {this.props.isEditing ? "Update Task" : "Add Task"}
          </ModalHeader>
          <fieldset disabled={submitting}>
            <Form
            // onSubmit={handleSubmit(this.props.save)}
            >
              <ModalBody>
                <FormGroup>
                  <legend>Task</legend>
                  {/* <Label>Task</Label> */}
                  <Input
                    type="text"
                    name="task"
                    placeholder="What's your next task?"
                    className="form-control"
                    {...task}
                  />
                  {/* {task.touched && task.error && (
                    <div className="help-block">{task.error}</div>
                  )} */}
                </FormGroup>

                <FormGroup>
                  <legend>Description</legend>
                  {/* <Label>Task</Label> */}
                  <Input
                    type="textarea"
                    name="description"
                    placeholder="Anything you need to remember to complete this task?"
                    className="form-control"
                    {...description}
                  />
                  {/* {task.touched && task.error && (
                    <div className="help-block">{task.error}</div>
                  )} */}
                </FormGroup>

                <FormGroup>
                  <FormGroup tag="fieldset">
                    {/* <Label>Priority</Label> */}
                    <legend>Priority</legend>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="priority" /> High
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="priority" /> Medium
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="priority" /> Low
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  {/* <Input
                    type="select"
                    name="priority"
                    classame="form-control"
                    multiple
                    {...priority}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </Input> */}
                  {/* {priority.touched && priority.error && (
                    <div className="help-block">{priority.error}</div>
                  )} */}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  {/* {this.props.isEditing ? "Update" : "Add"} */}
                  Submit
                </Button>
                &nbsp;
                <Button
                  color="default"
                  // type="submit"
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </fieldset>
        </Modal>
      </React.Fragment>
    );
  }
}

TaskForm = reduxForm(
  {
    form: "newTaskForm",
    fields: [
      "task",
      "priority",
      // '_id'
    ],
    validate: validation,
  },
  (state) => ({
    initialValues: state.tasks.item, // will pull state into form's initialValues
  })
)(TaskForm);

export default TaskForm;
