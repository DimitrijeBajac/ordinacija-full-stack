package com.ordinacijadb.ordinacija.service;

import com.ordinacijadb.ordinacija.model.MailStructure;

public interface EmailService {
    String sendMail(String mail, MailStructure mailStructure);
}
