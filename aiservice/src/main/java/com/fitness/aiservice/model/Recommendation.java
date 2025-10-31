package com.fitness.aiservice.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;

import jakarta.persistence.Table;

import java.time.LocalDateTime;
import java.util.List;

@Table(name="recommendations")
@Data
@Builder
public class Recommendation {
    @Id
    private String id;
    private String activityId;
    private String type;
    private String userId;
    private String recommendation;
    private List<String> improvements;
    private List<String> suggestions;
    private List<String> safety;

    @CreatedDate
    private LocalDateTime createdAt;
}
