import React from "react";


export default function Sample(){
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
  <div className="container">
      <div className="account">
        <h1>Formulir</h1>
        <div className="account-pass">
          <div className="col-md-8 account-top">
            <form>
              <div>
                <span>Nama Depan </span>
                <input type="text" />
              </div>
              <div>
                <span>Nama Belakang</span>
                <input type="text" />
              </div>
              <div>
                <span>Alamat </span>
                <input type="text" />
              </div>
              <div>
                <span>Provinsi</span>
                <input type="text" />
              </div>
              <div>
                <span>Kode Pos </span>
                <input type="text" />
              </div>
              <div>
                <span>Telp</span>
                <input type="text" />
              </div>
              <div>
                <span>Alamat Email </span>
                <input type="text" />
              </div>
              <div>
                <span>Model </span>
                <input type="text" />
              </div>
              <div>
                <span>Ukuran Referensi </span>
                <input type="text" />
              </div>
              <div>
                <span>Catatan </span>
                <textarea type="text" cols={2} rows="3"></textarea>
              </div>
              <div>
                <span>Syarat Dan Ketentuan </span>
                <span>Sample Yang akan dikirimkan adalah sample yang tersedia dengan ukuran terdekat dengan ukuran referensi yang dicantumkan.</span>
                
              </div>
              <input type="submit" defaultValue="Login" value="Get Sample" />
            </form>
          </div>
          <div className="col-md-4 left-account ">
            <a href="single">
              <img className="img-responsive " src="images/s1.jpg" alt="" />
            </a>
            <div className="five">
              <h2>25% </h2>
              <span>discount</span>
            </div>
            <a href="/register" className="create">
              Create an account
            </a>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"> </div>
        </div>
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