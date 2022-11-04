import InputImageBanner from "./inputImageBanner";
import TextDisplayOnBanner from "./textDisplayOnBanner";
import { useFormContext } from "react-hook-form";

const BannerPageDashboard = () => {
  const { getValues } = useFormContext();

  console.log("hahaha", getValues("name"));
  console.log("useFormContext", useFormContext());

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <form>
                <div className="card-header">Carousel Banner</div>
                <div className="card-body">
                  <InputImageBanner />
                </div>
                <hr className="my-0" />
                <div className="card-header">Text Display on Banner</div>
                <div className="card-body">
                  <TextDisplayOnBanner />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPageDashboard;
