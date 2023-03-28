import DaumPostcode, { Address } from "react-daum-postcode";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  onCompletePost: ((address: Address) => void) | undefined;
}

const postCodeStyle = {
  width: "400px",
  height: "400px",
  display: "block",
};

export function PostcodeModal(props: Props) {
  return (
    <>
      {props.isModalOpen && (
        <div className="modalWrapOver">
          <div>
            <img
              src="/assets/images/icons/close.png"
              alt=""
              onClick={props.closeModal}
            />
          </div>
          <DaumPostcode
            style={postCodeStyle}
            onComplete={props.onCompletePost}
          />
        </div>
      )}
    </>
  );
}
