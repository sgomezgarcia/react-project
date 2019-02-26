package com.iesemilidarder.xml.rules.controller;

import com.iesemilidarder.xml.rules.data.Restaurant;
import com.iesemilidarder.xml.rules.marshalling.DataFileHelper;
import com.iesemilidarder.xml.rules.marshalling.DataWrapper;
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
    public static List<Restaurant> myData = new ArrayList<>();

    @RequestMapping("/@restaurantId/@value")
    public String doSave(Model model){
        return "";
    }

    @RequestMapping("/")
    public String index(Model model) {

        List<Restaurant> data = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Restaurant aux = new Restaurant();
            aux.setName("Pepito" + i);
            data.add(aux);
        }

        //collection in a service
        DataWrapper aux = new DataWrapper();
        aux.setRestaurants(data);
        //lets save
        DataFileHelper helper = new DataFileHelper();
        helper.saveProjectToFile(helper.getProjectFilePath(), aux);
        //lets load
        DataWrapper aux2 = helper.loadProjectFromFile(helper.getProjectFilePath());

        model.addAttribute("restaurantes", data);
        return "index";
    }
}