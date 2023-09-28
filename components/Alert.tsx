interface AlertProps {
  dismissable?:boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Alert = ({ children, dismissable=false,onClose}: AlertProps) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <>
      {children}
      {dismissable &&  <button type="button" className="btn-close"  onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button> }
      </>
    </div>
  );
};

export default Alert;
