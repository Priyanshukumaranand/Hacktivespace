import React from 'react'
import { Link } from 'react-router-dom'
import blogImage2 from '../../images/blog/2.jpg'
import testImage1 from '../../images/blog/test1.jpg'
import testImage2 from '../../images/blog/test2.jpg'
import blogAuthorImage from '../../images/blog/blog-author.jpg'
import latestPostImage1 from '../../images/blog/bt-3.jpg'
import latestPostImage2 from '../../images/blog/bt-2.jpg'
import latestPostImage3 from '../../images/blog/bt-1.jpg'

const BlogPage = () => {
    return (
        <>
            <section class="page-title bg-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block text-center">
                                <span class="text-white">News details</span>
                                <h1 class="text-capitalize mb-4 text-lg">Blog Single</h1>
                                <ul class="list-inline">
                                    <li class="list-inline-item"><Link to="/" class="text-white">Home</Link></li>
                                    <li class="list-inline-item"><span class="text-white">/</span></li>
                                    <li class="list-inline-item"><Link to="#" class="text-white-50">News details</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section blog-wrap bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-12 mb-5">
                                    <div class="single-blog-item">
                                        <img src={blogImage2} alt="" class="img-fluid rounded" />

                                        <div class="blog-item-content bg-white p-5">
                                            <div class="blog-item-meta bg-gray py-1 px-2">
                                                <span class="text-muted text-capitalize mr-3"><i class="ti-pencil-alt mr-2"></i>Creativity</span>
                                                <span class="text-muted text-capitalize mr-3"><i class="ti-comment mr-2"></i>5 Comments</span>
                                                <span class="text-black text-capitalize mr-3"><i class="ti-time mr-1"></i> 28th January</span>
                                            </div>

                                            <h2 class="mt-3 mb-4"><Link to="blog-single.html">Improve design with typography?</Link></h2>
                                            <p class="lead mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.</p>

                                            <h3 class="quote">A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.</h3>

                                            <p class="lead mb-4 font-weight-normal text-black">The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p>

                                            <div class="tag-option mt-5 clearfix">
                                                <ul class="float-left list-inline">
                                                    <li>Tags:</li>
                                                    <li class="list-inline-item"><Link to="#" rel="tag">Advancher</Link></li>
                                                    <li class="list-inline-item"><Link to="#" rel="tag">Landscape</Link></li>
                                                    <li class="list-inline-item"><Link to="#" rel="tag">Travel</Link></li>
                                                </ul>

                                                <ul class="float-right list-inline">
                                                    <li class="list-inline-item"> Share: </li>
                                                    <li class="list-inline-item"><Link to="#" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></Link></li>
                                                    <li class="list-inline-item"><Link to="#" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></Link></li>
                                                    <li class="list-inline-item"><Link to="#" target="_blank"><i class="fab fa-pinterest-p" aria-hidden="true"></i></Link></li>
                                                    <li class="list-inline-item"><Link to="#" target="_blank"><i class="fab fa-google-plus" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 mb-5">
                                    <div class="posts-nav bg-white p-5 d-lg-flex d-md-flex justify-content-between ">
                                        <Link class="post-prev align-items-center" to="#">
                                            <div class="posts-prev-item mb-4 mb-lg-0">
                                                <span class="nav-posts-desc text-color">- Previous Post</span>
                                                <h6 class="nav-posts-title mt-1">
                                                    Donec consectetuer ligula <br />vulputate sem tristique.
                                                </h6>
                                            </div>
                                        </Link>
                                        <div class="border"></div>
                                        <Link class="posts-next" to="#">
                                            <div class="posts-next-item pt-4 pt-lg-0">
                                                <span class="nav-posts-desc text-lg-right text-md-right text-color d-block">- Next Post</span>
                                                <h6 class="nav-posts-title mt-1">
                                                    Ut aliquam sollicitudin leo.
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div class="col-lg-12 mb-5">
                                    <div class="comment-area card border-0 p-5">
                                        <h4 class="mb-4">2 Comments</h4>
                                        <ul class="comment-tree list-unstyled">
                                            <li class="mb-5">
                                                <div class="comment-area-box">
                                                    <img alt="" src={testImage1} class="img-fluid float-left mr-3 mt-2" />

                                                    <h5 class="mb-1">Philip W</h5>
                                                    <span>United Kingdom</span>

                                                    <div class="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                                                        <Link to="#"><i class="icofont-reply mr-2 text-muted"></i>Reply |</Link>
                                                        <span class="date-comm">Posted October 7, 2018 </span>
                                                    </div>

                                                    <div class="comment-content mt-3">
                                                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="comment-area-box">
                                                    <img alt="" src={testImage2} class="mt-2 img-fluid float-left mr-3" />

                                                    <h5 class="mb-1">Philip W</h5>
                                                    <span>United Kingdom</span>

                                                    <div class="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                                                        <Link to="#"><i class="icofont-reply mr-2 text-muted"></i>Reply |</Link>
                                                        <span class="date-comm">Posted October 7, 2018</span>
                                                    </div>

                                                    <div class="comment-content mt-3">
                                                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

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
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar-wrap">
                                <div class="sidebar-widget search card p-4 mb-3 border-0">
                                    <input type="text" class="form-control" placeholder="search" />
                                    <Link to="#" class="btn btn-mian btn-small d-block mt-2">search</Link>
                                </div>

                                <div class="sidebar-widget card border-0 mb-3">
                                    <img src={blogAuthorImage} alt="" class="img-fluid" />
                                    <div class="card-body p-4 text-center">
                                        <h5 class="mb-0 mt-4">Arther Conal</h5>
                                        <p>Digital Marketer</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>

                                        <ul class="list-inline author-socials">
                                            <li class="list-inline-item mr-3">
                                                <Link to="#"><i class="fab fa-facebook-f text-muted"></i></Link>
                                            </li>
                                            <li class="list-inline-item mr-3">
                                                <Link to="#"><i class="fab fa-twitter text-muted"></i></Link>
                                            </li>
                                            <li class="list-inline-item mr-3">
                                                <Link to="#"><i class="fab fa-linkedin-in text-muted"></i></Link>
                                            </li>
                                            <li class="list-inline-item mr-3">
                                                <Link to="#"><i class="fab fa-pinterest text-muted"></i></Link>
                                            </li>
                                            <li class="list-inline-item mr-3">
                                                <Link to="#"><i class="fab fa-behance text-muted"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="sidebar-widget latest-post card border-0 p-4 mb-3">
                                    <h5>Latest Posts</h5>

                                    <div class="media border-bottom py-3">
                                        <Link to="#"><img class="mr-4" src={latestPostImage1} alt="" /></Link>
                                        <div class="media-body">
                                            <h6 class="my-2"><Link to="#">Thoughtful living in los Angeles</Link></h6>
                                            <span class="text-sm text-muted">03 Mar 2018</span>
                                        </div>
                                    </div>

                                    <div class="media border-bottom py-3">
                                        <Link to="#"><img class="mr-4" src={latestPostImage2} alt="" /></Link>
                                        <div class="media-body">
                                            <h6 class="my-2"><Link to="#">Vivamus molestie gravida turpis.</Link></h6>
                                            <span class="text-sm text-muted">03 Mar 2018</span>
                                        </div>
                                    </div>

                                    <div class="media py-3">
                                        <Link to="#"><img class="mr-4" src={latestPostImage3} alt="" /></Link>
                                        <div class="media-body">
                                            <h6 class="my-2"><Link to="#">Fusce lobortis lorem at ipsum semper sagittis</Link></h6>
                                            <span class="text-sm text-muted">03 Mar 2018</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="sidebar-widget bg-white rounded tags p-4 mb-3">
                                    <h5 class="mb-4">Tags</h5>

                                    <Link to="#">Web</Link>
                                    <Link to="#">agency</Link>
                                    <Link to="#">company</Link>
                                    <Link to="#">creative</Link>
                                    <Link to="#">html</Link>
                                    <Link to="#">Marketing</Link>
                                    <Link to="#">Social Media</Link>
                                    <Link to="#">Branding</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPage