import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ContactService } from '../core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  article: Article = {} as Article;
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public toastr: ToastrManager
  ) {
    // use the FormBuilder to create a form group
    this.articleForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });

    // Initialized tagList as empty array
    this.article.tagList = [];

  }

  submitForm() {
    console.log("titles",this.articleForm);
    console.log("title",this.articleForm.value.name);
    
    this.contactService.Contact(this.articleForm.value)
    .subscribe(data => {
      console.log("res frontend:",data);
      this.toastr.successToastr('Has enviado tus datos correctamente', 'Perfecto!');
      this.isSubmitting = false;
      this.router.navigateByUrl('/');
    },
      err => {
        console.log("err",err);
        this.errors = err;
        this.toastr.errorToastr('Ha habido algún problema al enviar datos al servidor, revisa bien sus datos', 'Oops!');
        /*this.toastr.infoToastr('This is info toast.', 'Info');
        this.toastr.warningToastr('This is warning toast.', 'Alert!');
        this.toastr.errorToastr('This is error toast.', 'Oops!');
        this.toastr.successToastr('This is success toast.', 'Success!');*/

        
      }

    );
    
  }

}

