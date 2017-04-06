import { Component, OnInit } from '@angular/core';
import alertify from 'alertify.js';
declare var $:any;

@Component({
  selector: 'hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.css']
})
export class HiremeComponent implements OnInit {
  pattern = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";

  constructor() { }

  ngOnInit() {
  }
  contact(formValues){
    console.log(formValues);
    var $contactForm = $('#contact-form');
  $contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/atharvpandey@outlook.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
    alertify.success('Mail has been sent, I will get in touch with you shortly');
  }
}
