import React from "react";
export default function CartSummary() {
  return (
    <div className="col-lg-3">
      <div className="card mb-3 border shadow-0">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label className="form-label">Have coupon?</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border"
                  name=""
                  placeholder="Coupon code"
                />
                <button className="btn btn-light border">Apply</button>
              </div>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">$329.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-success">-$60.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">$14.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">$283.00</p>
                </div>

                <div className="mt-3">
                  <a href="#" className="btn btn-success w-100 shadow-0 mb-2">
                    {" "}
                    Make Purchase{" "}
                  </a>
                  <a href="#" className="btn btn-light w-100 border mt-2">
                    {" "}
                    Back to shop{" "}
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
