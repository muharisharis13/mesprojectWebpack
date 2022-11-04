import { InputWithImage } from "@components/dashboard";

const InputImageBanner = () => {
  return (
    <div className="row">
      {[2, 2, 2].map((item, idx) => (
        <div key={idx} className="col-md-4">
          <InputWithImage
            propsImg={{
              src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default InputImageBanner;
