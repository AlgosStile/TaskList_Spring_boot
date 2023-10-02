package ru.javabegin.tasklist.backendspringboot.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;


@Entity
@NoArgsConstructor
@Setter
@EqualsAndHashCode
public class Priority {
    private Long id;
    private String title;
    private String color;

    // Указываем, что поле заполняется в БД
    // нужно, когда добавляем новый объект и он возвращается уже с новым id

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    @Basic
    @Column(name = "color")
    public String getColor() {
        return color;
    }

    // Обратная ссылка на коллекцию Task не нужна


}