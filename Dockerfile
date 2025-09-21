# Use official nginx stable image
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy current project into nginx html folder
COPY . /usr/share/nginx/html

# Ensure correct permissions
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
