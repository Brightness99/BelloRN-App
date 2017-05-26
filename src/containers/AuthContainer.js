// @flow
import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, Dimensions, Alert, AsyncStorage, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import OrangeButton from '../components/Core/OrangeButton';
import GreyButton from '../components/Core/GreyButton';

import BelloLogo from '../images/bello.png';
import bukalapakLogo from '../images/white_bukalapak.png';

import { connect } from 'react-redux'
import { submitLogin } from '../actions/auth'
import { saveUserdata } from '../actions/userdata'


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

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
    paddingTop: 50,
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

type FormTextInputPropTypes = {
  formValue: string,
  placeholder: string,
  name: string,
  handleChange: Function,
};

const FormTextInput = ({
  formValue,
  placeholder,
  name,
  handleChange }: FormTextInputPropTypes) => (
    <TextInput
      placeholder={placeholder}
      style={styles.formInput}
      onChangeText={val => handleChange(name, val)}
      value={formValue}
      underlineColorAndroid={'rgba(255, 255, 255, 0)'}
    />
);

const SecureFormTextInput = ({
  formValue,
  placeholder,
  name,
  handleChange }: FormTextInputPropTypes) => (
    <TextInput
      secureTextEntry
      placeholder={placeholder}
      style={styles.formInput}
      onChangeText={val => handleChange(name, val)}
      value={formValue}
      underlineColorAndroid={'rgba(255, 255, 255, 0)'}
    />
);

type FromGroupPropTypes = {
  formValue: string,
  label: string,
  placeholder: string,
  name: string,
  type: string,
  handleChange: Function,
};

const FormGroup = ({
  formValue,
  label,
  placeholder,
  name,
  type,
  handleChange }: FromGroupPropTypes) => (
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
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);

    this.renderMain = this.renderMain.bind(this);
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

  submitLoginForm() {
    const { email, password } = this.state.formData;
    // QUICK HACK
    Actions.home();
    return true;
    if (email === '') {
      alert('Email harus diisi!');
      return false;
    } else if (password === '') {
      alert('Password harus diisi!');
      return false;
    }

    this.props.submitLogin(email, password)
    return true;
  }

  submitRegisterForm() {
    const { email, username, name, password, confPassword } = this.state.formData;
    if (email === '') {
      alert('Email harus diisi!');
      return false;
    } else if (username === '') {
      alert('Username harus diisi!');
      return false;
    } else if (name === '') {
      alert('Nama harus diisi!');
      return false;
    } else if (password === '') {
      alert('Password harus diisi!');
      return false;
    } else if (confPassword === '') {
      alert('Password konfirmasi harus diisi!');
      return false;
    } else if (confPassword !== password) {
      alert('Password konfirmasi harus sama dengan password!');
      return false;
    }
    Actions.home();
    return true;
  }

  renderMain() {
    if (!this.state.isLogin && !this.state.isRegister) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={BelloLogo} style={styles.belloImage} />
          <TouchableOpacity
            onPress={() => this.setFormVisibility('login')}
            style={styles.btn}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setFormVisibility('register')}
            style={styles.btn}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  }

  renderLoginForm() {
    if (this.state.isLogin) {
      return (
        <View style={styles.form}>
          <Text style={styles.formHeading}>LOGIN KE BUKALAPAK</Text>
          <FormGroup
            type={'text'}
            label={'Email'}
            placeholder={'Masukkan email'}
            name={'email'}
            formValue={this.state.email}
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
          <OrangeButton label={'Login'} handleClick={this.submitLoginForm} />
          <GreyButton label={'Belum punya akun?'} handleClick={() => this.setFormVisibility('register')} />
        </View>
      );
    }
    return null;
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
          <GreyButton label={'Sudah punya akun?'} handleClick={() => this.setFormVisibility('login')} />
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


  componentWillReceiveProps = (nextProps) => {
    if(nextProps.loginResult != null){
      if(nextProps.loginResult.login_status == "Login Succeed"){
        Alert.alert(
          'Login Succeed',
          'You\'ve logged in as ' + nextProps.loginResult.name
        )

        const userdata = {
          id : nextProps.loginResult.id,
          email : nextProps.loginResult.email,
          username : nextProps.loginResult.username,
          name : nextProps.loginResult.name,
          token : nextProps.loginResult.token
        }
        this.setLoggedUserData(userdata).done()
        this.props.saveUserdata(userdata)
        Actions.home()
      } else {
        Alert.alert(
          'Login Failed',
          'Invalid Username or Password'
        )
      }
    }
  }

  setLoggedUserData = async (user) => {
    try {
      await AsyncStorage.setItem('@Bello:user', JSON.stringify(user))
    } catch (error) {
      alert('Error Saving Data : ' + error)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollableContainer}>
          <View style={styles.welcome}>
            <Text style={styles.logo}>Bello</Text>
            <Text style={styles.tagline}>Belanja Semudah Bilang Hello!</Text>
            { this.renderMain() }
            { this.renderLoginForm() }
            { this.renderRegisterForm() }
            { /* this.renderFooter() */ }

            {
              (this.props.isFetching) &&
              <ActivityIndicator style={{ width: 70, height: 70, position: 'absolute', left: deviceWidth/2-35, top: deviceHeight/2-35 }}
                size="large" color='#efefef' />
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  submitLogin: (username, password) => dispatch(submitLogin(username, password)),
  saveUserdata: (data) => dispatch(saveUserdata(data))
})

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  loginResult: state.auth.result
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
