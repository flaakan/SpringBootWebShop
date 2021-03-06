package com.example.demo.controller;

import com.example.demo.domain.Product;
import com.example.demo.domain.User;
import com.example.demo.service.LoginService;
import com.example.demo.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
final class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(final ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    ResponseEntity<List<Product>> postResult() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

}
