// @flow
import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import OrangeButton from '../components/Core/OrangeButton';

import BelloLogo from '../images/bello.png';
import bukalapakLogo from '../images/white_bukalapak.png';

// const deviceHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    flex: 1,
    // minHeight: deviceHeight,
    // height: 1000,
    paddingTop: 100,
    paddingBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  belloImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 30,
  },
  tagline: {
    fontSize: 20,
    color: '#F5F5F5',
  },
  btn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    margin: 5,
    elevation: 1,
    width: '70%',
  },
  btnText: {
    color: '#444',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  formHeading: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
  },
  formLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: 10,
    marginTop: 0,
  },
  formInput: {
    backgroundColor: '#FFFFFF',
    color: '#222222',
    padding: 10,
    fontSize: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  footerSponsor: {
    height: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerSponsorText: {
    color: '#FFFFFF',
    opacity: 0.5,
    textAlign: 'center',
    alignItems: 'flex-end',
  },
  bukalapakLogo: {
    width: '30%',
    height: 50,
    resizeMode: 'contain',
  },
};

const FormTextInput = ({ formValue, placeholder, name, handleChange }: {formValue: string, placeholder: string, name: string, handleChange: Function}) => (
  <TextInput
    placeholder={placeholder}
    style={styles.formInput}
    onChangeText={val => handleChange(name, val)}
    value={formValue}
    underlineColorAndroid={'rgba(255, 255, 255, 0)'}
  />
);

const SecureFormTextInput = ({ formValue, placeholder, name, handleChange }: {formValue: string, placeholder: string, name: string, handleChange: Function}) => (
  <TextInput
    secureTextEntry
    placeholder={placeholder}
    style={styles.formInput}
    onChangeText={val => handleChange(name, val)}
    value={formValue}
    underlineColorAndroid={'rgba(255, 255, 255, 0)'}
  />
);

const FormGroup = ({ formValue, label, placeholder, name, type, required = false, handleChange }: {formValue: string, label: string, placeholder: string, name: string, type: string, required: boolean, handleChange: Function}) => (
  <View>
    <Text style={styles.formLabel}>{label}</Text>
    { type === 'text' && <FormTextInput formValue={formValue} placeholder={placeholder} name={name} handleChange={handleChange} /> }
    { type === 'password' && <SecureFormTextInput formValue={formValue} placeholder={placeholder} name={name} handleChange={handleChange} /> }
  </View>
);

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      isRegister: false,
      formData: {
        email: '',
        username: '',
        name: '',
        password: '',
        confPassword: '',
      },
    };

    this.setFormVisibility = this.setFormVisibility.bind(this);
    this.setFormValue = this.setFormValue.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);

    this.renderLoginForm = this.renderLoginForm.bind(this);
    this.renderRegisterForm = this.renderRegisterForm.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  componentDidMount() {
    // do something about login sessions here!
  }

  setFormVisibility(formToDisplay) {
    switch (formToDisplay) {
      case 'login': this.setState({ isLogin: true, isRegister: false }); break;
      case 'register': this.setState({ isLogin: false, isRegister: true }); break;
      default: this.setState({ isLogin: false, isRegister: false });
    }
  }

  setFormValue(inputKey, inputValue) {
    const { formData } = this.state;
    const newFormData = { ...formData };
    newFormData[inputKey] = inputValue;
    this.setState({
      formData: newFormData,
    });
  }

  submitRegisterForm() {
    alert(JSON.stringify(this.state));
  }

  renderLoginForm() {
    return (<Text>logging</Text>);
  }

  renderRegisterForm() {
    if (this.state.isRegister) {
      return (
        <View style={styles.form}>
          <Text style={styles.formHeading}>DAFTAR KE BUKALAPAK</Text>
          <FormGroup
            type={'text'}
            label={'Email'}
            placeholder={'Masukkan email'}
            name={'email'}
            formValue={this.state.email}
            handleChange={this.setFormValue}
          />
          <FormGroup
            type={'text'}
            label={'Username'}
            placeholder={'Masukkan username'}
            name={'username'}
            formValue={this.state.username}
            handleChange={this.setFormValue}
          />
          <FormGroup
            type={'text'}
            label={'Name'}
            placeholder={'Masukkan nama'}
            name={'name'}
            formValue={this.state.name}
            handleChange={this.setFormValue}
          />
          <FormGroup
            type={'password'}
            label={'Password'}
            placeholder={'Masukkan password'}
            name={'password'}
            formValue={this.state.password}
            handleChange={this.setFormValue}
          />
          <FormGroup
            type={'password'}
            label={'Confirmation Password'}
            placeholder={'Masukkan password konfirmasi'}
            name={'confPassword'}
            formValue={this.state.confPassword}
            handleChange={this.setFormValue}
          />
          <OrangeButton label={'Daftar Sekarang'} handleClick={this.submitRegisterForm} />
        </View>
      );
    }
    return null;
  }

  renderFooter() {
    return (
      <View style={styles.footerSponsor}>
        <Text style={styles.footerSponsorText}>Supported By</Text>
        <Image source={bukalapakLogo} style={styles.bukalapakLogo} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollableContainer}>
          <View style={styles.welcome}>
            <Text style={styles.logo}>Bello</Text>
            <Text style={styles.tagline}>Belanja Semudah Bilang Hello!</Text>
            <Image source={BelloLogo} style={styles.belloImage} />
            <TouchableOpacity onPress={Actions.home} style={styles.btn} activeOpacity={0.8}>
              <Text style={styles.btnText}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setFormVisibility('register')}
              style={styles.btn}
              activeOpacity={0.8}
            >
              <Text style={styles.btnText}>Daftar</Text>
            </TouchableOpacity>
            { this.renderRegisterForm() }
            { /* this.renderFooter() */ }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AuthContainer;
