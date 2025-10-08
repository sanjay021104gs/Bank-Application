package com.BankingApplication.service;

import com.BankingApplication.dto.AccountDto;
import com.BankingApplication.entity.Account;

import java.util.List;

public interface AccountService {
    AccountDto createAccount(AccountDto account);
    AccountDto getAccountById(Long id);
    AccountDto deposit(Long id, double amount);
    AccountDto withdraw(Long id, double amount);
    List<AccountDto> getAllAccounts();
    void deleteAccount(Long id);

}
