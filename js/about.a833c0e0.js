(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"058d":function(t,e,a){},1118:function(t,e,a){"use strict";var c=a("058d"),s=a.n(c);s.a},b0c0:function(t,e,a){var c=a("83ab"),s=a("9bf2").f,o=Function.prototype,n=o.toString,i=/^\s*function ([^ (]*)/,l="name";c&&!(l in o)&&s(o,l,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(t){return""}}})},b8fa:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContactForm")},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",{staticClass:"contact-form__title"},[t._v("Contact")]),a("div",{staticClass:"contact-form",attrs:{id:"contact-form"}},[t._m(0),a("form",{staticClass:"form",on:{submit:t.onSubmit}},[a("h2",[t._v("Qué puedo hacer por ti?")]),t.alertSuccess?a("div",{staticClass:"form__alert-success"},[a("p",[t._v("Contact form successfully submitted. Thank you, I will get back to you soon!")]),a("button",{staticClass:"material-icons",on:{click:t.closeAlert}},[t._v("close")])]):t._e(),a("div",{staticClass:"form-elements"},[a("div",{staticClass:"inputs"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],attrs:{required:"",name:"name",placeholder:"Full Name",type:"text",autocomplete:"off"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],attrs:{required:"",name:"email",placeholder:"Email Address",type:"email",autocomplete:"off"},domProps:{value:t.contact.email},on:{input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.subject,expression:"contact.subject"}],attrs:{required:"",name:"email",placeholder:"Subject",type:"text",autocomplete:"off"},domProps:{value:t.contact.subject},on:{input:function(e){e.target.composing||t.$set(t.contact,"subject",e.target.value)}}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.message,expression:"contact.message"}],attrs:{required:"",name:"message",rows:"4",placeholder:"Message"},domProps:{value:t.contact.message},on:{input:function(e){e.target.composing||t.$set(t.contact,"message",e.target.value)}}})]),a("button",{staticClass:"form__button"},[t._v("Send Message")])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-cards"},[a("div",{staticClass:"contact-card"},[a("span",{staticClass:"material-icons"},[t._v("phone")]),t._v(" (+57) 300 000 0000 ")]),a("div",{staticClass:"contact-card"},[a("span",{staticClass:"material-icons"},[t._v("location_on")]),t._v(" Colombia - Antioquia ")]),a("div",{staticClass:"contact-card"},[a("span",{staticClass:"material-icons"},[t._v("mail_outline")]),t._v(" travelblog@correo.com ")])])}],i=(a("b0c0"),{name:"ContactForm",data:function(){return{contact:{name:"",subject:"",email:"",message:""},alertSuccess:!1}},methods:{clearForm:function(){for(var t in this.contact)this.contact[t]=""},showAlert:function(){this.alertSuccess=!0},closeAlert:function(){this.alertSuccess=!1},onSubmit:function(t){t.preventDefault(),this.sendEmail()},sendEmail:function(){Email.send({Host:"smtp.elasticemail.com",Username:"slash-252@hotmail.com",Password:"67435E3FA315112018493A3198A6DDB28980",To:"miguelbetancurgrisales@gmail.com",From:"slash-252@hotmail.com",Subject:"New message from your blog El Rincón Verde",Body:"Hello Miguel, "+this.contact.name+" with email: "+this.contact.email+" wrote this in El Rincón Verde for you: Subject: "+this.contact.subject+". Message: "+this.contact.message}).then(this.showAlert(),this.clearForm())},fakeSendEmail:function(){console.log("sended email","Hello Miguel, "+this.contact.name+" with email: "+this.contact.email+" wrote this in El Rincón Verde for you: Subject: "+this.contact.subject+". Message: "+this.contact.message),this.showAlert(),this.clearForm()}}}),l=i,r=(a("1118"),a("2877")),m=Object(r["a"])(l,o,n,!1,null,"bd5db726",null),u=m.exports,d={name:"Contact",components:{ContactForm:u}},f=d,p=Object(r["a"])(f,c,s,!1,null,"2efe686f",null);e["default"]=p.exports}}]);
//# sourceMappingURL=about.a833c0e0.js.map