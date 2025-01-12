import React, { useEffect, useState } from 'react';
import sanityClient from '../../lib/sanity';
import { Link } from 'react-router-dom';
import testImage1 from '../../images/blog/test1.jpg'
import testImage2 from '../../images/blog/test2.jpg'

const BlogComments = ({ blogtitle }) => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "comment" && blog->title == $blogtitle]{
          name,
          email,
          comment,
          _createdAt
        }`,
                { blogtitle }
            )
            .then((data) => setComments(data))
            .catch(console.error);
    }, [blogtitle]);

    // console.log(comments);
    return (
        <>
            <div className="col-lg-12 mb-5">
                <div className="comment-area card border-0 p-5">
                    <h4 className="mb-4">{comments.length} Comments</h4>
                    <ul className="comment-tree list-unstyled">
                        {comments.map((comment, index) => (
                            <li className="mb-5">
                                <div className="comment-area-box">
                                    <img alt="" src={testImage1} className="img-fluid float-left mr-3 mt-2" />
                                    <h5 className="mb-1">{comment.name}</h5>
                                    <span>India</span>
                                    <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                                        <Link to="#"><i className="icofont-reply mr-2 text-muted"></i>Reply |</Link>
                                        <span className="date-comm">Posted {comment._createdAt} </span>
                                    </div>
                                    <div className="comment-content mt-3">
                                        <p>{comment.comment} </p>
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogComments


{/* <li className="mb-5">
                            <div className="comment-area-box">
                                <img alt="" src={testImage1} className="img-fluid float-left mr-3 mt-2" />

                                <h5 className="mb-1">Philip W</h5>
                                <span>United Kingdom</span>

                                <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                                    <Link to="#"><i className="icofont-reply mr-2 text-muted"></i>Reply |</Link>
                                    <span className="date-comm">Posted October 7, 2018 </span>
                                </div>

                                <div className="comment-content mt-3">
                                    <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                </div>
                            </div>
                        </li> */}
{/* <li>
                            <div className="comment-area-box">
                                <img alt="" src={testImage2} className="mt-2 img-fluid float-left mr-3" />

                                <h5 className="mb-1">Philip W</h5>
                                <span>United Kingdom</span>

                                <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                                    <Link to="#"><i className="icofont-reply mr-2 text-muted"></i>Reply |</Link>
                                    <span className="date-comm">Posted October 7, 2018</span>
                                </div>

                                <div className="comment-content mt-3">
                                    <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                </div>
                            </div>
                        </li> */}