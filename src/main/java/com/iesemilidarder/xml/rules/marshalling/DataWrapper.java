package com.iesemilidarder.xml.rules.marshalling;

import com.iesemilidarder.xml.rules.data.Restaurant;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

/**
 * com.iesemilidarder.xml.rules.marshalling
 * Class DataWrapper
 * By berto. 24/01/2019
 */
@XmlRootElement(name = "myProject") //namespace = "http://www.w3.org/2005/Atom",
@XmlAccessorType(XmlAccessType.FIELD)
public class DataWrapper {


    @XmlElementWrapper(name = "restaurants")
    @XmlElement(name = "restaurant")
    private List<Restaurant> restaurants = new ArrayList<>();

    public List<Restaurant> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Restaurant> restaurants) {
        this.restaurants = restaurants;
    }
}
