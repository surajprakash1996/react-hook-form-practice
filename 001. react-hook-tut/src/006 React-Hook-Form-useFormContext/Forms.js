import React,{Fragment} from 'react'
import BasicInformation from './Forms/BasicInformation';
import AddressInformation from './Forms/AddressInformation';
import ContactInformation from './Forms/ContactInformation';
import SubmitButton from './Forms/SubmitButton';

const Forms = (props) => {
    const {method} = props;
    const onSubmit = data => console.log(data);
    return (
        <Fragment>
          <form onSubmit={method.handleSubmit(onSubmit)}>
              <BasicInformation />
              <AddressInformation/>
              <ContactInformation />
              <SubmitButton />
          </form>
        </Fragment>
    )
}

export default Forms
