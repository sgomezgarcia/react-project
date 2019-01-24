package com.iesemilidarder.xml.rules.controller;

import com.iesemilidarder.xml.rules.data.Restaurant;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

/**
 * com.learningjava.rest.spring.front
 * Class
 * By berto. 12/02/2018
 */
@Controller
public class HomeController {
    @RequestMapping("/")
    public String index(Model model) {
        System.out.println("llego");
     /*   ReadDB rd = new ReadDB();
        List<Restaurantes> data = rd.readRestaurantes("");*/
        List<Restaurant> data = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Restaurant aux = new Restaurant();
            aux.setName("Pepito"+i);
            data.add(aux);
        }
        model.addAttribute("restaurantes",data);
        return "index";
    }
}