package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.stereotype.Service;
import org.w3c.dom.*;

import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;

@Service
public class CountryService {

    public Country getCountry(String code) {

        try {

            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("country.xml");

            Document document = DocumentBuilderFactory.newInstance()
                    .newDocumentBuilder()
                    .parse(inputStream);

            NodeList countryList = document.getElementsByTagName("country");

            for (int i = 0; i < countryList.getLength(); i++) {

                Element country = (Element) countryList.item(i);

                String countryCode =
                        country.getElementsByTagName("code").item(0).getTextContent();

                String countryName =
                        country.getElementsByTagName("name").item(0).getTextContent();

                if (countryCode.equalsIgnoreCase(code)) {
                    return new Country(countryCode, countryName);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}