import InputFields from "./InputFields";

const UserInput = ({ onPassing }) => {
  return (
    <>
      <div id="user-input">
        <div className="input-group" id="special-case">
          <InputFields
            title="INITIAL INVESTMENT"
            forWhat="initialInvestment"
            Placeholder='0'
            onChanging={onPassing}
          />
          <InputFields
            title="ANNUAL INVESTMENT"
            forWhat="annualInvestment"
            Placeholder='0'
            onChanging={onPassing}
          />
        </div>
        <div className="input-group">
          <InputFields
            title="EXPECTED RETURN"
            forWhat="expectedReturn"
            Placeholder='0'
            onChanging={onPassing}
          />
          <InputFields
            title="DURATION"
            forWhat="duration"
            Placeholder='1'
            onChanging={onPassing}
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
