package com.BankingApplication.controller;

import com.BankingApplication.dto.AccountDto;
import com.BankingApplication.service.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/account")  // Base path
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    // Add account - POST: http://localhost:8081/api/account/add
    @PostMapping("/add")
    public ResponseEntity<AccountDto> addAccount(@RequestBody AccountDto accountDto) {
        return new ResponseEntity<>(accountService.createAccount(accountDto), HttpStatus.CREATED);
    }

    // Get single account details - GET: http://localhost:8081/api/account/{id}
    @GetMapping("/{id}")
    public ResponseEntity<AccountDto> getAccountById(@PathVariable("id") Long id) {
        AccountDto accountDto = accountService.getAccountById(id);
        return ResponseEntity.ok(accountDto);
    }

    // Get all accounts - GET: http://localhost:8081/api/account/all
    @GetMapping("/all")
    public ResponseEntity<List<AccountDto>> getAllAccounts() {
        List<AccountDto> accountDto = accountService.getAllAccounts();
        return ResponseEntity.ok(accountDto);
    }

    // Deposit money - PUT: http://localhost:8081/api/account/{id}/deposit
    @PutMapping("/{id}/deposit")
    public ResponseEntity<AccountDto> deposit(@PathVariable Long id, @RequestBody Map<String, Double> request) {
        Double amount = request.get("amount");
        AccountDto accountDto = accountService.deposit(id, amount);
        return ResponseEntity.ok(accountDto);
    }

    // Withdraw money - PUT: http://localhost:8081/api/account/{id}/withdraw
    @PutMapping("/{id}/withdraw")
    public ResponseEntity<AccountDto> withdraw(@PathVariable Long id, @RequestBody Map<String, Double> request) {
        Double amount = request.get("amount");
        AccountDto accountDto = accountService.withdraw(id, amount);
        return ResponseEntity.ok(accountDto);
    }

    // Delete account - DELETE: http://localhost:8081/api/account/delete/{id}
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAccount(@PathVariable Long id) {
        accountService.deleteAccount(id);
        return ResponseEntity.ok("Account Deleted Successfully!");
    }
}
