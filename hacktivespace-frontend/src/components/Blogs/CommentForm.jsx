import React from 'react'

const CommentForm = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="col-lg-12">
      <form className="contact-form bg-white rounded p-5" id="comment-form" onSubmit={handleSubmit}>
        <h4 className="mb-4">Write a comment</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" type="text" name="name" id="name" placeholder="Name:" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" type="text" name="mail" id="mail" placeholder="Email:" />
            </div>
          </div>
        </div>

        <textarea className="form-control mb-3" name="comment" id="comment" cols="30" rows="5" placeholder="Comment"></textarea>

        {showSuccess && (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-success contact__msg" role="alert">
                Commented successfully.
              </div>
            </div>
          </div>
        )}

        <input
          className="btn btn-main btn-round-full"
          type="submit"
          name="submit-contact"
          id="submit_contact"
          value="Submit Message"
        />
      </form>
    </div>
  );
}

export default CommentForm

{/* <div className="col-lg-12">
      <form className="contact-form bg-white rounded p-5" onSubmit={handleSubmit}>
        <h4 className="mb-4">Write a comment</h4>
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Name:"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Email:"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>
        <textarea
          className="form-control mb-3"
          placeholder="Comment"
          cols="30"
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {showSuccess && (
          <div className="alert alert-success" role="alert">
            Commented successfully.
          </div>
        )}
        <input
          className="btn btn-main btn-round-full"
          type="submit"
          value="Submit Message"
          disabled={!isFormValid}
        />
      </form>
    </div> */}