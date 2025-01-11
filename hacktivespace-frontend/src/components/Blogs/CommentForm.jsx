import React from 'react'

const CommentForm = () => {
  return (
    <div class="col-lg-12">
                  <form class="contact-form bg-white rounded p-5" id="comment-form">
                    <h4 class="mb-4">Write a comment</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input class="form-control" type="text" name="name" id="name" placeholder="Name:" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input class="form-control" type="text" name="mail" id="mail" placeholder="Email:" />
                        </div>
                      </div>
                    </div>


                    <textarea class="form-control mb-3" name="comment" id="comment" cols="30" rows="5" placeholder="Comment"></textarea>

                    <input class="btn btn-main btn-round-full" type="submit" name="submit-contact" id="submit_contact" value="Submit Message" />
                  </form>
                </div>
  )
}

export default CommentForm