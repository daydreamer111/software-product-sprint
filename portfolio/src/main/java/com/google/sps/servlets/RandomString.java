package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/rand-song")
public class RandomString extends HttpServlet{
    private int i = 0;
    //List with songs goes here
    private String[] songs = {"If I Leave Today - Autumn Kings", "Kansen Kankakku Dreamer - ONE OK ROCK", "Wake Up - Dreamcatcher", "Untouched - The Veronicas"};

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        response.getWriter().println(songs[i]);
        i++;
        if(i == songs.length){
            i = 0;
        }
    }
}