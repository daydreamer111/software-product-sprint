package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/rand-song")
public class RandomString extends HttpServlet{

    private String songs = "[{\"song\": \"If I Leave Today\", \"artist\": \"Autumn Kings\"}, {\"song\": \"Kansen Kankakku Dreamer\", \"artist\": \"ONE OK ROCK\"}, {\"song\": \"Wake Up\", \"artist\": \"Dreamcatcher\"}, {\"song\": \"Untouched\", \"artist\": \"The Veronicas\"}, {\"song\": \"Invinsible\", \"artist\": \"Kelly Clarkson\"}, {\"song\": \"Hijo de la Luna\", \"artist\": \"Mecano\"}]";
    
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        response.getWriter().println(songs);
    }
}