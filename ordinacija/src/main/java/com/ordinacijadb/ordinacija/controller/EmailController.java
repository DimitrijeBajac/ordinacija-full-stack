package com.ordinacijadb.ordinacija.controller;

import com.ordinacijadb.ordinacija.model.MailStructure;
import com.ordinacijadb.ordinacija.service.EmailService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mail")
@CrossOrigin("http://localhost:3000")
public class EmailController {

    private EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send/{mail}")
    public String sendMail(@PathVariable String mail, @RequestBody MailStructure mailStructure){
         return emailService.sendMail(mail, mailStructure);
    }
}
