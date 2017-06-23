package com.fabhotels.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Entity
public class Courses {

    @Id
    private Long id;
    private String courseName;
    private String duration;
    private String fees;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getFees() {
        return fees;
    }

    public void setFees(String fees) {
        this.fees = fees;
    }
}
