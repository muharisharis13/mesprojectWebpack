import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import InputForm from "./inputForm";

const AboutPageDashboard = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Most Effective Solution",
      desc: "MES menghadirkan layanan berupa Digital Bisnis Development yang akan membantu Bisnis anda dalam dunia Digital",
      listAbout: [
        {
          text: "Memberikan pelayanan 24jam dalam pelayanan terrhadap client maupun calon client",
        },
        {
          text: "Dapat melakukan negosiasi maupun meeting secara tatap muka maupun online dalam konsultasi",
        },
        {
          text: "Sebutkan keinginan anda Maka Kami akan Mewujudkannya",
        },
        {
          text: "Tepat Waktu menjadi prioritas dalam pelayanan kami",
        },
      ],
    },
  });

  const [imgBanner, setImgBanner] = useState(
    "https://mediacartz.mesproject.id/assets/img/about-img.jpg"
  );

  const { fields: fieldsListAbout } = useFieldArray({
    control,
    name: "listAbout",
  });

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <InputForm
                register={register}
                fieldsListAbout={fieldsListAbout}
                imgBanner={imgBanner}
                setImgBanner={setImgBanner}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDashboard;
