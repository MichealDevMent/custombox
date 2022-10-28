import React from "react";


export default function Gallery(){
    return<div>
      <div>
  <div className="header">
    <div className="header-top">
      <div className="container">
        <div className="search">
          <form>
            <input
              type="text"
              defaultValue="Search "
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Search';}"
            />
            <input type="submit" defaultValue="Go" />
          </form>
        </div>
        <div className="header-left">
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
          <div className="cart box_1">
            <a href="checkout">
              <h3>
                {" "}
                <div className="total">
                  <span className="simpleCart_total" /> (
                  <span
                    id="simpleCart_quantity"
                    className="simpleCart_quantity"
                  />{" "}
                  items)
                </div>
                <img src="images/cart.png" alt="" />
              </h3>
            </a>
            <p>
              <a href="javascript:;" className="simpleCart_empty">
                Empty Cart
              </a>
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*content*/}
  <div className="content">
    <div className="container">
      <div className="content-top">
        <h1>BEST IN GALLERY</h1>
        <div className="grid-in">
          <div className="col-md-4 grid-top">
            <a
              href="single"
              className="b-link-stripe b-animate-go  thickbox"
            >
              <img className="img-responsive" src="images/pi.png" alt="" />
              <div className="b-wrapper">
                <h3 className="b-animate b-from-left    b-delay03 ">
                  <span>Box</span>
                </h3>
              </div>
            </a>
            <p>
              <a href="single">Contrary to popular</a>
            </p>
          </div>
          <div className="col-md-4 grid-top">
            <a
              href="single"
              className="b-link-stripe b-animate-go  thickbox"
            >
              <img className="img-responsive" src="images/pi1.png" alt="" />
              <div className="b-wrapper">
                <h3 className="b-animate b-from-left    b-delay03 ">
                  <span>Box</span>
                </h3>
              </div>
            </a>
            <p>
              <a href="single">classical Latin</a>
            </p>
          </div>
          <div className="col-md-4 grid-top">
            <a
              href="single"
              className="b-link-stripe b-animate-go  thickbox"
            >
              <img className="img-responsive" src="images/pi2.png" alt="" />
              <div className="b-wrapper">
                <h3 className="b-animate b-from-left    b-delay03 ">
                  <span>Bag</span>
                </h3>
              </div>
            </a>
            <p>
              <a href="single">undoubtable</a>
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="grid-in">
          <div className="col-md-4 grid-top">
            <a
              href="single"
              className="b-link-stripe b-animate-go  thickbox"
            >
              <img className="img-responsive" src="images/pi3.png" alt="" />
              <div className="b-wrapper">
                <h3 className="b-animate b-from-left    b-delay03 ">
                  <span>Box</span>
                </h3>
              </div>
            </a>
            <p>
              <a href="single">suffered alteration</a>
            </p>
          </div>
          <div className="col-md-4 grid-top">
            <a
              href="single"
              className="b-link-stripe b-animate-go  thickbox"
            >
              <img className="img-responsive" src="images/pi4.png" alt="" />
              <div className="b-wrapper">
                <h3 className="b-animate b-from-left    b-delay03 ">
                  <span>Bag</span>
                </h3>
              </div>
            </a>
            <p>
              <a href="single">Content here</a>
            </p>
          </div>
          <div className="col-md-4 grid-top">
            <a
              href="single"
              className="b-link-stripe b-animate-go  thickbox"
            >
              <img className="img-responsive" src="images/pi5.png" alt="" />
              <div className="b-wrapper">
                <h3 className="b-animate b-from-left    b-delay03 ">
                  <span>Box</span>
                </h3>
              </div>
            </a>
            <p>
              <a href="single">readable content</a>
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/*-*/}
    </div>
    {/**/}
    <div className="content-bottom">
      <ul>
        <li>
          <a href="#">
            <img className="img-responsive" src="images/lo.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="img-responsive" src="images/lo1.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="img-responsive" src="images/lo2.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="img-responsive" src="images/lo3.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="img-responsive" src="images/lo4.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="img-responsive" src="images/lo5.png" alt="" />
          </a>
        </li>
        <div className="clearfix"> </div>
      </ul>
    </div>
  </div>
  <div className="footer">
    <div className="container">
      <div className="footer-top-at">
        <div className="col-md-4 amet-sed">
          <h4>MORE INFO</h4>
          <ul className="nav-bottom">
            <li>
              <a href="#">How to order</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="contact">Location</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 amet-sed ">
          <h4>CONTACT US</h4>
          <p>Contrary to popular belief</p>
          <p>The standard chunk</p>
          <p>office: +12 34 995 0792</p>
          <ul className="social">
            <li>
              <a href="#">
                <i> </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="twitter"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="rss"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="gmail"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 amet-sed">
          <h4>Newsletter</h4>
          <p>Sign Up to get all news update and promo</p>
          <form>
            <input
              type="text"
              defaultValue=""
              onfocus="this.value='';"
              onblur="if (this.value == '') {this.value ='';}"
            />
            <input type="submit" defaultValue="Sign up" />
          </form>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="footer-class">
      <p>
        © 2022 New store All Rights Reserved | Design by{" "}
        <a href="https://github.com/bambangSIS" target="_blank">
          BBRSOFT
        </a>{" "}
      </p>
    </div>
  </div>
</div>

  </div>
}