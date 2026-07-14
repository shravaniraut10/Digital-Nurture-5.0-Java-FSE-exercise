package com.cognizant.springcountrydemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringCountryDemoApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringCountryDemoApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(SpringCountryDemoApplication.class, args);

        displayCountry();
    }

    public static void displayCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country =
                context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country.toString());
    }
}