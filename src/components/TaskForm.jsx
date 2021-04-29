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
  // Input,
} from "reactstrap";
import React from "react";
import {
  Field,
  reduxForm,
  // initialize
} from "redux-form";
import validation from "./TaskFormSchema";

class TaskForm extends React.Component {
  render() {
  const {
    fields: { task, description, priority },
    submitting,
    // handleSubmit,
    // item, itemFetching, 
    // error,
    isModal,
    isEditing,
    toggle,
    toggleAddQuestion,
    // task,
    // description,
    // priority,
    error
  } = this.props;
  return (
    <React.Fragment>
      <Modal isOpen={isModal}>
        <ModalHeader
          toggle={isEditing ? toggle : toggleAddQuestion}
          // className
        >
          {isEditing ? "Update Task" : "Add Task"}
        </ModalHeader>
        <fieldset disabled={submitting}>
        <Form
          onSubmit={(this.props.save)}
          // onSubmit={handleSubmit}
        >
          <ModalBody>
            <FormGroup>
              <legend>Task</legend>
              <Field
                name="task"
                component="input"
                type="text"
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
              <Field
                name="description"
                component="input"
                type="textarea"
                placeholder="Anything you need to remember to complete this task?"
                className="form-control"
                {...description}
              />
              {/* 
               {task.touched && task.error && (
                    <div className="help-block">{task.error}</div>
                  )} 
                  */}
            </FormGroup>

            <FormGroup >
              <FormGroup tag="fieldset" >
                {/* <Label>Priority</Label>  */}
                <legend>Priority</legend>
                <FormGroup check >
                  <Label check>
                    <Field
                      type="radio"
                      name="priority"
                      value="high"
                      // className="form-control"
                      component="input"
                      {...priority}
                    />{" "}
                    High
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Field
                      type="radio"
                      name="priority"
                      value="medium"
                      // className="form-control"
                      component="input"
                      {...priority}
                    />{" "}
                    Medium
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Field
                      type="radio"
                      name="priority"
                      value="low"
                      // className="form-control"
                      component="input"
                      {...priority}
                    />{" "}
                    Low
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>
            {error && <div className="help-block">{error}</div>}
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
};
}

export default reduxForm(
  {
    form: "task",
    fields: [
      "task",
      "description",
      "priority",
      "_id"
    ],
    validate: validation,
  },
  (state) => ({
    initialValues: state.tasks.item, // will pull state into form's initialValues
  })
)(TaskForm);
