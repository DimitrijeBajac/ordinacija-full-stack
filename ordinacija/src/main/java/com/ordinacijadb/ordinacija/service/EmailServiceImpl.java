package com.ordinacijadb.ordinacija.service;

import com.ordinacijadb.ordinacija.model.MailStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Override
    public String sendMail(String email, MailStructure mailStructure) {
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("dimitrijebajac77@gmail.com");
            message.setTo(email);
            message.setText(mailStructure.getMessage());
            message.setSubject(mailStructure.getSubject());
            mailSender.send(message);

            return "Message sent......";

        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
