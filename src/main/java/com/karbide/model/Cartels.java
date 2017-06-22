package com.karbide.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Entity
public class Cartels {

    @Id
    private Long id;
    private boolean automobiles;
    private boolean carInsurance;
    private boolean ultrabooks;
    private boolean splitAC;
    private boolean vehicleInsurance;
    private boolean healthLifeInsurance;
    private boolean homeLoans;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAutomobiles() {
        return automobiles;
    }

    public void setAutomobiles(boolean automobiles) {
        this.automobiles = automobiles;
    }

    public boolean isCarInsurance() {
        return carInsurance;
    }

    public void setCarInsurance(boolean carInsurance) {
        this.carInsurance = carInsurance;
    }

    public boolean isUltrabooks() {
        return ultrabooks;
    }

    public void setUltrabooks(boolean ultrabooks) {
        this.ultrabooks = ultrabooks;
    }

    public boolean isSplitAC() {
        return splitAC;
    }

    public void setSplitAC(boolean splitAC) {
        this.splitAC = splitAC;
    }

    public boolean isVehicleInsurance() {
        return vehicleInsurance;
    }

    public void setVehicleInsurance(boolean vehicleInsurance) {
        this.vehicleInsurance = vehicleInsurance;
    }

    public boolean isHealthLifeInsurance() {
        return healthLifeInsurance;
    }

    public void setHealthLifeInsurance(boolean healthLifeInsurance) {
        this.healthLifeInsurance = healthLifeInsurance;
    }

    public boolean isHomeLoans() {
        return homeLoans;
    }

    public void setHomeLoans(boolean homeLoans) {
        this.homeLoans = homeLoans;
    }
}
