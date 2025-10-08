package com.BankingApplication.repository;

import com.BankingApplication.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {

}

