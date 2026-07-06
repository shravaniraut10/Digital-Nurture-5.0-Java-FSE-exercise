package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService Bean Created");
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        if (bookRepository != null) {
            System.out.println("Dependency Injection Successful!");
        } else {
            System.out.println("BookRepository is NULL");
        }
    }
}